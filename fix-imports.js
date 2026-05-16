const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

['app', 'components', 'data'].forEach(dir => {
  walkDir(dir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // regex to match `from '../../something'`
      // and replace with `from '@/something'`
      let newContent = content.replace(/from\s+['"](?:\.\.\/)+([^'"]+)['"]/g, "from '@/$1'");
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log('Fixed', filePath);
      }
    }
  });
});

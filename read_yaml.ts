import * as fs from 'fs';
import * as yaml from 'js-yaml';

const fileContents = fs.readFileSync('data.yaml', 'utf8');
const data = yaml.load(fileContents);

console.log(data);
import { extractStyle } from 'ant-design-vue/lib/_util/static-style-extract';
import fsExtra from 'fs-extra';

export const generateCss = async () => {
  const cssText = extractStyle();
  const antdCssPath = './src/public/css/antd.min.css';

  await fsExtra.outputFile(antdCssPath, cssText, 'utf8');
  console.log('generated css:', antdCssPath);
};


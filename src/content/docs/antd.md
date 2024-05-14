# Nuxt3 集成Ant Design Vue 4 静态样式导出、修复页面样式延迟问题

> 在服务端渲染（SSR）中，对于采用CSS-in-JS的组件库如Ant Design Vue，构建时将样式预先导出为静态CSS文件是提升性能的关键。这一过程降低了服务器的运行时负担，加速了首次页面渲染，避免了样式闪烁，优化了客户端水合过程，并改善了缓存效率。对于使用Nuxt3等SSR框架的应用，采用CSS-in-JS方式的组件、我们需要采取一些额外的处理【 静态样式导出】

以下文档将指导您如何在Nuxt3项目中实现Ant Design Vue的SSR静态样式导出。

## 安装必要的工具

在开始之前，请确保已经安装了以下npm包。如果这些包已经存在于您的项目中，则可以跳过这一步。

```
bash复制代码yarn add @types/fs-extra fs-extra --dev
```

### 步骤 1: 创建 Ant Design Vue 插件

在Nuxt3项目的`hooks`目录下创建一个新的TypeScript文件`antd.ts`，该文件将负责生成静态的CSS文件并将其保存在指定位置。

```tsx
// hooks/antd.ts

import { extractStyle } from 'ant-design-vue/lib/_util/static-style-extract';
import fsExtra from 'fs-extra';

async function myExtractStyle() {
    const cssText = extractStyle();
    await fsExtra.outputFile('public/css/antd.css', cssText, 'utf8')
}

export default myExtractStyle;
```

### 步骤 2: 配置 Nuxt3

编辑项目根目录下的`nuxt.config.ts`文件，以确保在Nuxt3项目中引入Ant Design Vue，并加载生成的CSS文件。

```tsx
// nuxt.config.ts

import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    'build:done': async () => {
      const { default: myExtractStyle } = await import('./hooks/antd');
      await myExtractStyle();
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "/css/antd.css" // 引用生成的静态样式文件
        }
      ]
    }
  },
  modules: [
    '@ant-design-vue/nuxt' // 确保Ant Design Vue Nuxt模块被加载
  ],
  css: [
    'ant-design-vue/dist/reset.css' // 加载Ant Design Vue的基础样式重置文件
  ]
});
```

### 结论

遵循以上步骤后，您将在Nuxt3项目中成功实现了Ant Design Vue的SSR静态样式导出。此操作将帮助您减少前端渲染时的工作量，加快页面加载速度，从而提高最终用户的体验。
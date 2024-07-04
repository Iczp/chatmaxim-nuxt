# Windows 10 Hyper-V 系统要求

Hyper-V 可用于 64 位 Windows 10 专业版、企业版和教育版。 Hyper-V 需要二级地址转换 (SLAT) - 存在于 Intel 和 AMD 最新一代的 64 位处理器中。

你可以在具有 4GB RAM 的主机上运行 3 或 4 台基本虚拟机，但如果要运行更多的虚拟机则需要更多的资源。 另外，你可能还需要创建有 32 个处理器和 512GB RAM 的较大虚拟机，具体取决于你的物理硬件。



## 操作系统要求

可以在以下版本的 Windows 10 上启用 Hyper-V 角色：

- Windows 10 企业版
- Windows 10 专业版
- Windows 10 教育版

**不能**在以下版本上安装 Hyper-V 角色：

- Windows 10 家庭版
- Windows 10 移动版
- Windows 10 移动企业版

> Windows 10 家庭版可以升级到 Windows 10 专业版。 若要执行此操作，请打开“设置”>“更新和安全”>“激活”。 可以在此处访问应用商店并购买升级。



## 硬件要求

虽然本文档未提供兼容 Hyper-V 的硬件完整列表，但需要具备以下各项：

- 具有二级地址转换 (SLAT) 的 64 位处理器。
- CPU 支持 VM 监视器模式扩展（Intel CPU 上的 VT-x）。
- 最少 4 GB 内存。 由于虚拟机与 Hyper-V 主机共享内存，因此将需要提供足够的内存来处理预期虚拟工作负荷。

需要在系统 BIOS 中启用以下各项：

- 虚拟化技术 - 可能具有不同标记，具体取决于主板制造商。
- 硬件强制执行数据执行保护。



## 验证硬件兼容性

检查上述操作系统和硬件要求后，即可打开 PowerShell 会话或命令提示符 (cmd.exe) 窗口，键入 **systeminfo**，然后检查“Hyper-V 要求”部分，通过这种方式在 Windows 中验证硬件兼容性。 如果列出的所有 Hyper-V 要求都具有值 **Yes**，则你的系统可以运行 Hyper-V 角色。 如果任一项返回 **No**，请查看本文档中列出的要求并进行调整（如果可能）。






![Screenshot of the Administrator Command Prompt screen with a focus on the output for the Hyper V requirements section.](https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/reference/media/systeminfo-upd.png)



## 最终检查

如果满足所有 OS、硬件和兼容性要求，则会看到 Hyper-V 位于“控制面板: 打开或关闭 Windows 功能”中，且有 2 个选项。

1. Hyper-V 平台
2. HYPER-V 管理工具

![Screenshot of the Control Panel's Turn Windows features on or off pane with a focus on the Hyper V Management Tools and Hyper V Platform folders.](https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/reference/media/hyper_v_feature_screenshot.png)

 备注

> 如果看到 Windows 虚拟机监控程序平台而不是 Hyper-V 位于“控制面板:打开或 >关闭 Windows 功能”中，则系统可能与 Hyper-V 不兼容，那么请交叉检查上述要求。 在现有 Hyper-V 主机上运行 **systeminfo** 时，Hyper-V 要求部分读取如下内容：

```
Hyper-V Requirements: A hypervisor has been detected. Featu
```
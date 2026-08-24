# Unity Setup

Do you meet the system requirements? Well now you can install Unity!

We recommend downloading Unity 2022.3.62f3 through [Unity Hub](https://unity.com/hub).

If you don't want to install Unity Hub, or you don't meet the system requirements for it, you can manually install Unity 2022.3.62f3 [here](https://unity.com/releases/editor/whats-new/2022.3.62f3#installs).

::: warning
Make sure to get a **Personal License** before creating your project. Unity requires a Unity ID and a Unity license.
:::

::: danger
Make sure to install **Android Build Support** and **Windows Build Support** (Mono or IL2CPP) as a component in Unity! If you are NOT using Unity Hub, please download them [here](https://unity.com/releases/editor/whats-new/2022.3.62f3#installers), and download the Android SDK, NDK, and OpenJDK 17!
:::

If you're using Unity Hub, you can install Unity 2022.3.62f3 [here](unityhub://2022.3.62f3). In the component installers, select **Android Build Support** if you are building for **Quest**, and **Windows Build Support** (Mono or IL2CPP) if you are building for **PCVR**.

![Correct components](/images/install-components.png)

::: tip
You can also install **Visual Studio** as a component for code editing. Make sure to install the **Unity** component within VS.
:::

After Unity installs, if you have Unity Hub, create a new project.
Make sure to select **3D (Built-In Render Pipeline) (Core)**.

::: details
If you do NOT have Unity Hub installed, open Unity, then go to File > New Project, then name it whatever you want, then hit create.
:::

![Correct project](/images/project-creation.png)

We would recommend **Connect to Unity Cloud ON.**

In newer versions of the Unity Hub, it offers platforms other than UVC. **Please use GitHub if it is an option.** Otherwise use UVC, as nowadays it stores the entire project and not just the assets folder.
Once your project opens, you should see something like this.

![Open project](/images/open-project.png)

If you are new to Unity, get familiar with this layout as we continue on through this tutorial! You can set it to or make a new layout if you'd like, but for this tutorial, we will use the **Default** layout.

The first thing you will want to do is to **delete** the Main Camera in the Hierarchy.
Do this by right clicking the Main Camera, then hitting **Delete**.

![Deleting main camera](/images/main-camera-deletion.png)

Next, you will want to go to Edit > **Project Settings...**

![Project settings select menu](/images/project-settings.png)

Then you will want to go to XR Plugin Management > **Install XR Plugin Management**.

![XR Plugin Management install menu](/images/xr-plugin-management.png)

::: warning
If there are any issues with the installation (if it's stuck on *Downloading* XR Plugin Management, etc.), please try installing a different Unity version. Please note that the UIs may have changed.
:::

It will take you to XR Plugin Management > Project Validation. Go back to XR Plugin Management, and on the PC tab, check **OpenXR**.

![OpenXR installation](/images/openxr.png)

If it asks you to enable the Input System backends, click **Yes**. This is required for full OpenXR functionality.

![Input system prompt](/images/input-system.png)

If it also asks you to save the scene, select yes.

Now, go back into the project settings, then go to XR Plugin Management > **Project Validation**, then on the PC tab, select **Fix All**.

![Fixing all in Project Validation](/images/project-validation.png)

If it doesn't fix immediately, it will soon. You can just carry on with this tutorial if it doesn't immediately fix.

Now, on the issue where it says `⚠️ [OpenXR] At least one interaction profile must be added. Please select which controllers you will be testing against in the Features menu.`, click **Edit**, then under **Enabled Interaction Profiles**, add every option on there. If you don't want to, we would at least recommend **Meta Quest Touch Pro Controller Profile**, **Meta Quest Touch Plus Controller Profile**, **Oculus Touch Controller Profile**, and **Valve Index Controller Profile**.

![Interaction profiles](/images/interaction-profiles.png)

Now, go back to **XR Plugin Management**, but this time go to the **Android** tab and enable **OpenXR**.

![OpenXR on Meta](/images/meta-openxr.png)

Now go to XR Plugin Management > **OpenXR**, then stay on the **Android** tab, and add the interaction profiles by Meta.

Also enable **Meta Quest Support** at the bottom.

![Meta interaction profiles](/images/meta-interaction-profiles.png)
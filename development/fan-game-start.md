Once your project opens, you should see something like this.

![Open project](/images/open-project.png)

This article currently uses information from [this video](https://www.youtube.com/watch?v=nll9A1aHoM0).

If you are new to Unity, get familiar with this layout as we continue on through this tutorial! You can set it to or make a new layout if you'd like.

The first thing you will want to do is to **delete** the Main Camera in the Hierarchy.
Do this by right clicking the Main Camera, then hitting **Delete**.

Next, you will want to go to Edit > **Project Settings...**

Then you will want to go to XR Plugin Management > **Install XR Plugin Management**.

::: warning
If there are any issues with the installation (if it's stuck on *Downloading* XR Plugin Management, etc.), please try installing a different Unity version. Please note that the UIs may have changed.
:::

It will take you to XR Plugin Management > Project Validation. Go back to XR Plugin Management, and on the PC tab, check **OpenXR**.

If it asks you to enable the Input System backends, click **Yes**. This is required for full OpenXR functionality.

If it also asks you to save the scene, select yes.

Now, go back into the project settings, then go to XR Plugin Management > **Project Validation**, then on the PC tab, select **Fix All**.

If it doesn't fix immediately, it will soon. You can just carry on with this tutorial if it doesn't immediately fix.

Now, on the issue where it says `⚠️ [OpenXR] At least one interaction profile must be added. Please select which controllers you will be testing against in the Features menu.`, click **Edit**, then under **Enabled Interaction Profiles**, add every option on there. If you don't want to, we would at least recommend **Meta Quest Touch Pro Controller Profile**, **Meta Quest Touch Plus Controller Profile**, **Oculus Touch Controller Profile**, and **Valve Index Controller Profile**.

Now, go back to **XR Plugin Management**, but this time go to the **Android** tab and enable **OpenXR**.

Now go to XR Plugin Management > **OpenXR**, then stay on the **Android** tab, and add the interaction profiles by Meta.

Also enable **Meta Quest Support** at the bottom.

Now, go to **Window > Package Manager**, then change the packages at the top to **Unity Registry**, then scroll down until you see **XR Interaction Toolkit**, then click **Install**. Then, go to **Samples** in the XRI package, then import **Starter Assets**.

Now, go to **Samples > XR Interaction Toolkit > 3.x.x > Starter Assets > Presets** in the Project window.

Now, select all of the presets, and in the **Inspector**, click **Add to ...** at the top.

Now, go to Project Settings, then go to **Preset Manager**, and under **ActionBasedController**, by XRI Default Right Controller and XRI Default Left Controller, type in `right` and `left` with exact spelling and capitalization.

::: warning
It is recommended you rename **Scenes > SampleScene** to something like **Main**, because some packages will override SampleScene.
:::

Now, download [Gorilla Locomotion](https://github.com/Another-Axiom/GorillaLocomotion/blob/main/GorillaLocomotion.unitypackage), and open **GorillaLocomotion.unitypackage**. It should automatically open in Unity.

Now, in the package importer, click **All**, then **Import**.

Now, drag **Resources > GorillaPrefabs > Gorilla Rig** to your scene.

Select the Gorilla Rig in the scene, and in the inspector, change **Tracking Origin Mode** to **Floor**.

Now, dropdown Gorilla Rig and GorillaPlayer. Select both **LeftHand Controller** and **RightHand Controller**, and in the tag in the inspector, click **Add tag**, then add a new tag called **HandTag** with exact spelling and capitalization. Select the two controllers and assign the tag. Now, under LeftHand Controller, add a layer called `Left Hand` and another called `Right Hand`. In the LeftHand Controller and RightHand Controller, assign the correct layers.

Now, under both controllers, in the Inspector, click **Add Component**, then add a Sphere Collider. In that sphere collider, enable **Is Trigger**, and set the Radius to 0.06.

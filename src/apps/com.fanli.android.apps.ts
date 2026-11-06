// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "返利",
  "id": "com.fanli.android.apps",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"closewv\"][visibleToUser=true] <<n [id=\"com.fanli.android.apps:id/webviewContainer\"]",
          "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13245808",
          "exampleUrls": "https://e.gkd.li/7e013a50-4f55-4f49-8024-7dd749e8d53d",
          "key": 0
        },
        {
          "matches": "@View[clickable=true][width<158 && height<158] <n View[childCount=4] < View < WebView < * < [vid=\"webviewContainer\"]",
          "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13245808",
            "https://i.gkd.li/i/33924810"
          ],
          "exampleUrls": "https://e.gkd.li/47c6d3bf-7cff-4462-9288-1be6d2368f99",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-应用内弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"J_poplayer_box\"] >n @View + [text=\"main_bkg\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[vid=null][width<68 && height<68] < @FrameLayout[childCount=1] < * - RelativeLayout > [text=\"开启提醒\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/33924577",
          "exampleUrls": "https://e.gkd.li/061779d2-fb8c-43a1-80ac-11e36deaab83",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-小悬浮窗",
      "desc": "x掉",
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[width<76 && width<76][visibleToUser=true] <n [childCount>1] < * < * < [vid=\"float_container\"]",
          "activityIds": "com.fanli.android.module.main.activity.PanoMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33924577",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"J_poplayer_box\"] >n @View + [text=\"main_bkg\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"J_poplayer_box\"] >n @View + [text=\"main_bkg\"]",
          "key": 0
        }
      ]
    }
  ]
});

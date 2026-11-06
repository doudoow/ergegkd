// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ES文件浏览器",
  "id": "com.estrongs.android.pop",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.estrongs.android.pop:id/iv_close\"]",
          "activityIds": "com.fighter.loader.view.InteractTemplateAdDialog",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12509667"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12509669"
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": [
            ".app.openscreenad.HomeBackSplashActivity",
            ".app.PopVideoPlayer",
            ".view.FileExplorerActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/18072076",
            "https://i.gkd.li/i/18072078",
            "https://i.gkd.li/i/24684475"
          ],
          "exampleUrls": "https://e.gkd.li/3632e624-28bf-45fd-bb52-a7ee9a644b7a"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.fighter.loader.view.InteractTemplateAdDialog",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12509667"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".view.FileExplorerActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12509669"
        }
      ]
    },
    {
      "name": "局部广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - LinearLayout >2 ImageView[id=\"com.estrongs.android.pop:id/close\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12674919"
        },
        {
          "matches": "@[id=\"com.estrongs.android.pop:id/close\"] + [id=\"com.estrongs.android.pop:id/ad_flag_source\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12818281"
        },
        {
          "matches": "[vid=\"close_b_t_a_i_b_no_compliance\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13842299"
        },
        {
          "matches": "ImageView - LinearLayout >(2) ImageView[id=\"com.estrongs.android.pop:id/close\"][clickable=true]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12674919"
          ]
        },
        {
          "matches": "ImageView - LinearLayout >2 ImageView[vid=\"close\"][clickable=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12674919"
        },
        {
          "matches": "@[vid=\"close\"] + [vid=\"ad_flag_source\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12818281"
        }
      ]
    },
    {
      "name": "全屏广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.estrongs.android.pop:id/iv_close\"]",
          "activityIds": "com.fighter.loader.view.InteractTemplateAdDialog",
          "snapshotUrls": "https://i.gkd.li/i/12509667",
          "key": 0
        },
        {
          "matches": "TextView[text!=null] < FrameLayout - ImageView - FrameLayout > ImageView",
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "snapshotUrls": "https://i.gkd.li/i/12509669",
          "key": 1
        },
        {
          "matches": "[id=\"com.estrongs.android.pop:id/interact_ad_root\"] >n [id=\"com.estrongs.android.pop:id/iv_close\"]",
          "activityIds": "com.estrongs.android.pop.view.FileExplorerActivity",
          "snapshotUrls": "https://i.gkd.li/i/13936617",
          "key": 2
        }
      ]
    }
  ]
});

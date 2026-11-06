// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米视频",
  "id": "com.miui.video",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "desc": "该广告的第二段需开启[智能服务]的对应规则才能关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"v_banner_bottom_right\"]",
          "activityIds": "com.miui.video.feature.detail.NewShortVideoDetailActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16044569",
          "exampleUrls": "https://m.gkd.li/57941037/cd25f4a5-64db-4471-8eea-3d84a34ffb72"
        },
        {
          "matches": "[vid=\"iv_ad\"][visibleToUser=true]",
          "activityIds": "com.miui.video.feature.detail.NewShortVideoDetailActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16044569",
          "exampleUrls": "https://m.gkd.li/57941037/cd25f4a5-64db-4471-8eea-3d84a34ffb72"
        },
        {
          "matches": "[vid=\"pause_ad_close_img\" || vid=\"iv_ad\" || vid=\"v_banner_bottom_right\" || vid=\"ad_close\" || vid=\"v_banner_bottomright\"][clickable=true]",
          "activityIds": [
            ".feature.detail.NewShortVideoDetailActivity",
            ".feature.detail.NewLongVideoDetailActivityV2"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/16044569",
            "https://i.gkd.li/i/25323739",
            "https://i.gkd.li/i/25404935",
            "https://i.gkd.li/i/25404805"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/cd25f4a5-64db-4471-8eea-3d84a34ffb72"
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "x掉",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ad_action_close\" || vid=\"iv_close\"][clickable=true]",
          "activityIds": [
            ".feature.main.MainTabActivity",
            ".feature.detail.NewShortVideoDetailActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25404970",
            "https://i.gkd.li/i/30749182"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"ad_logo\"] +2 ImageView[vid=\"v_icon\"][clickable=true]",
          "activityIds": ".feature.main.MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/30749781",
            "https://i.gkd.li/i/30749782"
          ],
          "exampleUrls": "https://e.gkd.li/af353485-0109-4247-9e04-642492b3df16",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-视频列表广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.miui.video:id/iv_close\"][visibleToUser=true] - [text=\"立即下载\"] - ImageView[id=\"com.miui.video:id/download_icon\"] < [id=\"com.miui.video:id/v_download\"]",
          "snapshotUrls": "https://i.gkd.li/i/25323739",
          "key": 0
        }
      ]
    }
  ]
});

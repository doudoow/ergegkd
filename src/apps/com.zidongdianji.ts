// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "自动点击器",
  "id": "com.zidongdianji",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "enable": false,
      "forcedTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "WebView >3 View[childCount=2] > View[childCount=4] > View[childCount=1] > @Image[childCount=0][visibleToUser=true][text=\"\"] <<n [vid=\"native_ad_container_top\" || vid=\"rv_record\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14782886",
            "https://i.gkd.li/i/16646833"
          ]
        },
        {
          "matches": "WebView > View[childCount=2] > TextView[text!=null][visibleToUser=false] + @View[visibleToUser=true][childCount=0] <<n [vid=\"rv_record\"]",
          "position": {
            "left": "width * 0.9481",
            "top": "width * 0.0778"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16742931",
          "exampleUrls": "https://e.gkd.li/ab8308a9-a237-49ee-8ed5-38e6d543acf0"
        },
        {
          "matches": "@ImageView[clickable=true][width<80 && height<80] <2 LinearLayout +2 LinearLayout > [text=\"详情点击\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24336331",
          "exampleUrls": "https://e.gkd.li/029e9494-fb0a-4752-8711-1f6e68684ef5"
        },
        {
          "matches": "@[clickable=true] >n [text=\"不感兴趣\"]",
          "preKeys": [
            4,
            1,
            2
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14783475",
            "https://i.gkd.li/i/24336327"
          ],
          "exampleUrls": "https://e.gkd.li/560a7da4-64f5-4dc7-899c-60856241662f"
        },
        {
          "matches": "Image < @View[visibleToUser=true] + View > View > [text=\"广告\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14782886"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": 4,
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14783475"
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"img_native_ad_default_close\"][visibleToUser=true]",
          "activityIds": "com.autoclicker.clicker.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19381476",
          "exampleUrls": "https://e.gkd.li/e6b14a8f-6533-4601-92b8-f5032fc18234",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@LinearLayout > TextView[id=`com.byted.pangle:id/tt_item_tv`][text=`不感兴趣`]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.dislike.ui",
          "key": 0
        },
        {
          "matches": "Image < @View + View > View > [text=\"广告\"]",
          "activityIds": "com.autoclicker.clicker.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13761239"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@LinearLayout > TextView[id=`com.byted.pangle:id/tt_item_tv`][text=`不感兴趣`]",
          "activityIds": "com.bytedance.sdk.openadsdk.core.dislike.ui",
          "key": 0
        },
        {
          "matches": "Image < @View + View > View > [text=\"广告\"]",
          "activityIds": "com.autoclicker.clicker.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13761239"
        }
      ]
    }
  ]
});

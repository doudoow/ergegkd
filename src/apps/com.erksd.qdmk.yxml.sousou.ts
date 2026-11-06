// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "新大师兄影视",
  "id": "com.erksd.qdmk.yxml.sousou",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"activity_sdk_interstitial_cacel\"][visibleToUser=true]",
          "activityIds": "cn.haorui.sdk.activity.HRNativeInterstitialActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23435915",
          "exampleUrls": "https://e.gkd.li/8f712571-be10-4d59-afa4-6957492eb25d"
        },
        {
          "matches": "[id=\"ad_area\"] > [id=\"close_btn\"][visibleToUser=true]",
          "activityIds": "com.sigmob.sdk.base.common.PortraitTransparentAdActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23435936",
          "exampleUrls": "https://e.gkd.li/92bb7cc8-c5c2-4ccf-8f1d-35bcc0e30f9e"
        }
      ]
    }
  ]
});

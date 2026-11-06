// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大师兄影视",
  "id": "com.suishenji.cdscc.hjapp",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "x掉",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ms_activity_sdk_interstitial_cacel\"]",
          "activityIds": "com.meishu.sdk.activity.SdkInterstitialActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26344634",
          "key": 0
        }
      ]
    }
  ]
});

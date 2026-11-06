// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "东莞通",
  "id": "com.futurefleet.dongguantongbus.ui.dg",
  "groups": [
    {
      "name": "局部广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][width<60 && height<60] <<n [vid=\"flow_ad_fl_container_view\"][visibleToUser=true]",
          "activityIds": "com.unionpay.smartDG.activity.UPMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23290739",
          "exampleUrls": "https://e.gkd.li/fd24a381-82eb-4dc2-80f8-410783a1a680",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": "com.yd.saas.base.inner.interstitial.YdInterstitialActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23357205",
          "exampleUrls": "https://e.gkd.li/d4e02a98-f4e7-492f-9317-717454d74fd5",
          "key": 0
        }
      ]
    }
  ]
});

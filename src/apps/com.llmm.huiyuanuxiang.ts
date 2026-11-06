// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "囧次元",
  "id": "com.llmm.huiyuanuxiang",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@Image[text!=null][childCount=0][visibleToUser=true] - View >2 [text=\"恭喜获得优惠券\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "snapshotUrls": "https://i.gkd.li/i/18129413",
          "exampleUrls": "https://e.gkd.li/12d1cfdb-9aa0-4688-8997-733611c0faaf",
          "key": 0
        }
      ]
    }
  ]
});

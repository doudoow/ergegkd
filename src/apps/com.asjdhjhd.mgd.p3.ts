// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "橘汁",
  "id": "com.asjdhjhd.mgd.p3",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true][width<78] < [childCount=1] +2 FrameLayout >2 [text=\"立即下载\"]",
          "activityIds": "com.windmill.sdk.host.stub.StubActivityStandard_TL_Portrait",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34303867",
          "exampleUrls": "https://e.gkd.li/c080c336-c36e-4001-8fd1-c2ec0ef0a1da",
          "key": 0
        }
      ]
    }
  ]
});

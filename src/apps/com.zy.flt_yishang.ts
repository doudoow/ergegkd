// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "飞猫管家",
  "id": "com.zy.flt_yishang",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[desc*=\"跳过\"][desc.length<10][width<500 && height<200][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24097095",
          "exampleUrls": "https://e.gkd.li/882f36c1-d172-436f-a43e-194d75940886",
          "key": 0
        }
      ]
    }
  ]
});

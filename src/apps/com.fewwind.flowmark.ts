// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "FlowMark",
  "id": "com.fewwind.flowmark",
  "groups": [
    {
      "name": "更新提示",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"发现新版本\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20737817",
          "exampleUrls": "https://e.gkd.li/ab46d163-83f6-4c50-a6f4-e37186928fba",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "美之图",
  "id": "com.mmzztt.app",
  "groups": [
    {
      "name": "其他-提示[切换高清]时点击[取消]",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"切换高清\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": "com.uzmap.pkg.EntranceActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23146683",
          "exampleUrls": "https://e.gkd.li/ea71f47e-13e3-4980-a6d6-d8e8faf27541",
          "key": 0
        }
      ]
    }
  ]
});

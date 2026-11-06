// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "表盘自定义工具",
  "id": "tech.pingx.watchface",
  "groups": [
    {
      "name": "通知提示-公告",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text*=\"请勿\"][text*=\"电子书\"]",
            "[text=\"确定\"][clickable=true]"
          ],
          "activityIds": "io.dcloud.PandoraEntryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23714166",
          "key": 0
        }
      ]
    }
  ]
});

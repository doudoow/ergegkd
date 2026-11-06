// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Device Integration Service",
  "id": "com.microsoft.deviceintegrationservice",
  "groups": [
    {
      "name": "功能类-自动[允许]连接至Windows",
      "desc": "点击[允许]",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"连接至 Windows\"] +(1,2) [visibleToUser=true] > [text=\"允许\"]",
          "activityIds": "com.microsoft.deviceExperiences.permission.MediaProjectionPermissionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33084704",
          "exampleUrls": "https://e.gkd.li/8a8e5daa-4d6c-4fe3-aba8-90364624a5e6",
          "key": 0
        }
      ]
    }
  ]
});

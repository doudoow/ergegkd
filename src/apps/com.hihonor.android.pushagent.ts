// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀推送服务",
  "id": "com.hihonor.android.pushagent",
  "groups": [
    {
      "name": "功能类-自动[禁止]发送通知",
      "desc": "弹窗:是否允许xxx发送通知? 点击[禁止]",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text$=\"发送通知？\"]",
            "[text=\"禁止\"][clickable=true]"
          ],
          "activityIds": ".activity.NotificationDialogForOverMagic6Activity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26328029",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "远程协助",
  "id": "com.vivo.remoteassistant",
  "groups": [
    {
      "name": "功能类-自动同意远程协助请求",
      "desc": "发来远程协助请求，点击同意",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"发来远程协助请求\"][visibleToUser=true]",
            "Button[vid=\"inviteeAgree\"][visibleToUser=true]"
          ],
          "activityIds": ".InviteeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20768251",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "豆包",
  "id": "com.larus.nova",
  "groups": [
    {
      "name": "功能类-自动创建新对话",
      "desc": "每次进入豆包自动创建新对话",
      "matchTime": 5000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"larus_chat_top_left_create_new_cvs\"][desc=\"创建新对话\"]",
          "key": 0,
          "name": "①直接[创建新对话]",
          "snapshotUrls": "https://i.gkd.li/i/32434802"
        },
        {
          "matches": "[!(desc=\"创建新对话\")] - [vid=\"back_icon\"][desc=\"对话列表\"][clickable=true]",
          "key": 1,
          "name": "①展开[对话列表]",
          "snapshotUrls": "https://i.gkd.li/i/26175174",
          "excludeSnapshotUrls": "https://i.gkd.li/i/32434802"
        },
        {
          "matches": "[vid=\"side_bar_create_conversation\"][desc=\"创建新对话\"][clickable=true]",
          "preKeys": [
            1
          ],
          "name": "②点击[创建新对话]",
          "snapshotUrls": "https://i.gkd.li/i/26175178",
          "key": 2
        }
      ]
    }
  ]
});

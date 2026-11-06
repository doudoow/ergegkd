// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "YouTube",
  "id": "app.revanced.android.youtube",
  "groups": [
    {
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[desc=\"Close\"][clickable=true][visibleToUser=true][width<150 && height<150] <<n [vid=\"custom\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20856330",
          "exampleUrls": "https://e.gkd.li/3c45eae4-383d-489b-ae58-f58d70ea4478",
          "key": 0
        },
        {
          "matches": "@[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"我暂时不要\" || desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true][clickable=true] <n ViewGroup < [vid=\"custom\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/20856330",
            "https://i.gkd.li/i/28311636"
          ],
          "exampleUrls": [
            "https://e.gkd.li/3c45eae4-383d-489b-ae58-f58d70ea4478",
            "https://e.gkd.li/28d7203a-d807-4f0d-be86-2b76a06a30e8"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动翻译评论",
      "desc": "评论区自动点击[翻译成/Translate to]",
      "key": 1,
      "rules": [
        {
          "matches": "@Button[desc^=\"翻译成\"||desc^=\"Translate to\"][clickable=true][visibleToUser=true] -n [desc^=\"@\"] <<3 ViewGroup -n * < [vid=\"results\" || vid=\"section_list\"]",
          "actionCd": 500,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25462649",
          "exampleUrls": "https://e.gkd.li/f43ebb75-f0d2-4447-9681-2937f72cf3f7",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-退出自动关闭小窗",
      "desc": "退出视频自动关闭小窗播放器",
      "actionCd": 8000,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"modern_miniplayer_close\"][clickable=true]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28288384",
          "exampleUrls": "https://e.gkd.li/931cb9f7-6b10-438b-8483-d0522734a3b2",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Tumblr",
  "id": "com.tumblr",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "更多-举报Ad-展示太频繁",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ViewGroup > @[desc=\"更多\"][clickable=true] -(1,2) [text^=\"赞助\"][visibleToUser=true]",
          "key": 0,
          "name": "①点击[更多]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25996699",
            "https://i.gkd.li/i/26002004"
          ],
          "exampleUrls": "https://e.gkd.li/932873cc-13e0-4c87-a518-dab86c5949e1"
        },
        {
          "matches": "[vid=\"ad_dropdown_menu_button\"][clickable=true]",
          "key": 1,
          "name": "①点击[菜单]",
          "snapshotUrls": "https://i.gkd.li/i/33899457"
        },
        {
          "matches": "@[clickable=true] > [text=\"举报广告\"][visibleToUser=true]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "②[举报广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25996711",
            "https://i.gkd.li/i/33899499"
          ],
          "exampleUrls": "https://e.gkd.li/09561a19-92af-476b-a2fd-825fc0c822d9"
        },
        {
          "matches": "@[clickable=true] > [text=\"此广告出现得过于频繁\"][visibleToUser=true]",
          "preKeys": [
            2
          ],
          "key": 3,
          "name": "③此广告出现得过于频繁",
          "snapshotUrls": [
            "https://i.gkd.li/i/25996722",
            "https://i.gkd.li/i/33899505"
          ],
          "exampleUrls": "https://e.gkd.li/ef99a82e-811c-4206-8cda-593a7291049c"
        }
      ]
    }
  ]
});

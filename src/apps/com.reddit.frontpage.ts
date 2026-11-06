// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Reddit",
  "id": "com.reddit.frontpage",
  "groups": [
    {
      "name": "其他-关闭订阅社区消息提示",
      "desc": "自动点击[Not Now]",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"sheet_container\"] > [vid=\"cancel_button\"][text=\"Not Now\"][clickable=true]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13649914",
            "https://i.gkd.li/i/17269009"
          ],
          "exampleUrls": "https://e.gkd.li/b640f2c9-4564-420f-8a2f-20f461032f3d",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-NSFW 内容提示",
      "desc": "自动点击 continue",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "Button[text=\"Cancel\"] + Button[text=\"Continue\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13649992",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击翻译",
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"translation_banner_action\"][clickable=true] > [visibleToUser=true][text=\"翻译\"] <<n [vid=\"fragment_pager\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22451437",
          "excludeSnapshotUrls": "https://i.gkd.li/i/22451467",
          "exampleUrls": "https://e.gkd.li/8fcef25c-ff16-4456-8174-cac27aa7fc66",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-社区消息-更新提示",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.reddit.frontpage:id/cancel_button\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13649914",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-NSFW 内容提示",
      "desc": "自动点击 continue",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "Button[text=\"Cancel\"] + Button[text=\"Continue\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13649992",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "desc": "①点击卡片右上角 ②点击[隐藏]",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"post_overflow\"] <4 [id=\"post_header\"] <(1,2) [id=\"promoted_post_unit\"] <<n [vid=\"main_activity_navhost\"]",
          "key": 0,
          "name": "①点击卡片右上角",
          "snapshotUrls": [
            "https://i.gkd.li/i/28876494",
            "https://i.gkd.li/i/29087336"
          ]
        },
        {
          "matches": "View[top=prev.bottom] - @View[height<200][top=prev.top] <2 [id=\"conversation_screen_ad\"] <<n [visibleToUser=true] <n [vid=\"fragment_pager\"]",
          "position": {
            "left": "width * 0.9106",
            "top": "width * 0.0657"
          },
          "key": 1,
          "name": "①坐标点击卡片右上角",
          "snapshotUrls": "https://i.gkd.li/i/28876944"
        },
        {
          "matches": "[text=\"Hide\" || text=\"隱藏\"] <2 @[clickable=true] <7 [id=\"action_item_list\"] <<n [vid=\"main_activity_navhost\"]",
          "preKeys": [
            0
          ],
          "key": 2,
          "name": "②主页-点击[隐藏]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28876631",
            "https://i.gkd.li/i/29087234"
          ]
        },
        {
          "matches": "[text=\"Hide\" || text=\"隱藏\"] < @[clickable=true] < ScrollView < View < View < View < [id=\"android:id/content\"]",
          "preKeys": [
            1
          ],
          "matchRoot": true,
          "key": 3,
          "name": "②帖子页-点击[隐藏]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28876636",
            "https://i.gkd.li/i/29087235"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-社区消息-更新提示",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.reddit.frontpage:id/cancel_button\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13649914",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-NSFW 内容提示",
      "desc": "自动点击 continue",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "Button[text=\"Cancel\"] + Button[text=\"Continue\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13649992",
          "key": 0
        }
      ]
    },
    {
      "name": "社区消息-更新提示",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.reddit.frontpage:id/cancel_button\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13649914",
          "key": 0
        }
      ]
    },
    {
      "name": "NSFW 内容提示",
      "desc": "自动点击 continue",
      "enable": false,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "Button[text=\"Cancel\"] + Button[text=\"Continue\"]",
          "activityIds": "com.reddit.launch.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13649992",
          "key": 0
        }
      ]
    }
  ]
});

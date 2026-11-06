// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Instagram",
  "id": "com.instagram.android",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "但是步骤较多, 影响app使用",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"赞助内容\"] + [id=\"com.instagram.android:id/feed_more_button_stub\"]",
          "actionCd": 4000,
          "key": 0,
          "name": "点击\"更多\"按钮",
          "snapshotUrls": "https://i.gkd.li/i/12798562"
        },
        {
          "matches": "@ViewGroup >n [text=\"隐藏广告\"]",
          "key": 1,
          "name": "点击\"隐藏广告\"按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798571",
            "https://i.gkd.li/i/12829448"
          ]
        },
        {
          "matches": "@ViewGroup > [text=\"广告不相关\"]",
          "key": 2,
          "name": "点击\"广告不相关\"按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798590",
            "https://i.gkd.li/i/12829464"
          ]
        },
        {
          "matches": "[text=\"你不会再看到这条广告\"]",
          "action": "back",
          "key": 3,
          "name": "关闭[你不会再看到这条广告]",
          "snapshotUrls": "https://i.gkd.li/i/12829492"
        },
        {
          "matches": "[text=\"赞助内容\"] + [vid=\"feed_more_button_stub\"]",
          "actionCd": 4000,
          "key": 4,
          "name": "点击\"更多\"按钮",
          "snapshotUrls": "https://i.gkd.li/i/12798562"
        }
      ]
    },
    {
      "name": "功能类-自动点击[查看翻译]",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"查看翻译\"][clickable=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14093211",
          "exampleUrls": "https://m.gkd.li/57941037/e92702d8-8349-4718-aa4d-664bf3d2f6e5"
        },
        {
          "matches": "[text$=\"查看翻译\"][clickable=false][desc!=null][visibleToUser=true]",
          "excludeMatches": "[text=\"查看翻译\"][clickable=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14784095",
            "https://i.gkd.li/i/16776676"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7d6da15b-1c3f-4160-a2d3-d8223bc55132"
        },
        {
          "matches": "[text=\"查看翻译\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14093211",
          "exampleUrls": "https://m.gkd.li/57941037/e92702d8-8349-4718-aa4d-664bf3d2f6e5"
        },
        {
          "matches": "[text$=\"查看翻译\"][desc!=null]",
          "excludeMatches": "[text=\"查看翻译\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14784095",
          "exampleUrls": "https://m.gkd.li/57941037/7d6da15b-1c3f-4160-a2d3-d8223bc55132"
        },
        {
          "matches": "@[clickable=true][text=\"查看翻译\"] <<n [vid=\"sticky_header_list\"][getChild(0).id=null]",
          "key": 4,
          "name": "评论区2",
          "snapshotUrls": "https://i.gkd.li/i/31329753"
        },
        {
          "matches": "[text$=\"查看翻译\"][clickable=false][desc!=null][visibleToUser=true]",
          "excludeMatches": "[text=\"查看翻译\"][clickable=true]",
          "position": {
            "left": "width * 0.3",
            "top": "height * 0.45"
          },
          "key": 5,
          "name": "首页",
          "snapshotUrls": [
            "https://i.gkd.li/i/14784095",
            "https://i.gkd.li/i/31329663"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16776676",
          "exampleUrls": "https://m.gkd.li/57941037/7d6da15b-1c3f-4160-a2d3-d8223bc55132"
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "但是步骤较多, 影响app使用",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"赞助内容\"] + [id=\"com.instagram.android:id/feed_more_button_stub\"]",
          "actionCd": 4000,
          "key": 0,
          "name": "点击【更多】按钮",
          "snapshotUrls": "https://i.gkd.li/import/12798562"
        },
        {
          "matches": "@ViewGroup >n [text=\"隐藏广告\"]",
          "key": 1,
          "name": "点击【隐藏广告】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12798571",
            "https://i.gkd.li/import/12829448"
          ]
        },
        {
          "matches": "@ViewGroup > [text=\"广告不相关\"]",
          "key": 2,
          "name": "点击【广告不相关】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12798590",
            "https://i.gkd.li/import/12829464"
          ]
        },
        {
          "matches": "[text=\"你不会再看到这条广告\"]",
          "action": "back",
          "key": 3,
          "name": "关闭[你不会再看到这条广告]",
          "snapshotUrls": "https://i.gkd.li/import/12829492"
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "但是步骤较多, 影响app使用",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"赞助内容\"] + [id=\"com.instagram.android:id/feed_more_button_stub\"]",
          "actionCd": 4000,
          "key": 0,
          "name": "点击【更多】按钮",
          "snapshotUrls": "https://i.gkd.li/import/12798562"
        },
        {
          "matches": "@ViewGroup >n [text=\"隐藏广告\"]",
          "key": 1,
          "name": "点击【隐藏广告】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12798571",
            "https://i.gkd.li/import/12829448"
          ]
        },
        {
          "matches": "@ViewGroup > [text=\"广告不相关\"]",
          "key": 2,
          "name": "点击【广告不相关】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12798590",
            "https://i.gkd.li/import/12829464"
          ]
        },
        {
          "matches": "[text=\"你不会再看到这条广告\"]",
          "action": "back",
          "key": 3,
          "name": "关闭[你不会再看到这条广告]",
          "snapshotUrls": "https://i.gkd.li/import/12829492"
        }
      ]
    }
  ]
});

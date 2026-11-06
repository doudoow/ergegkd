// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "虎扑",
  "id": "com.hupu.games",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"shield_view\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12511005",
            "https://i.gkd.li/i/13258026",
            "https://i.gkd.li/i/13259692",
            "https://i.gkd.li/i/15360331"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"屏蔽该广告\" || text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12511010",
            "https://i.gkd.li/i/12534848",
            "https://i.gkd.li/i/13259699",
            "https://i.gkd.li/i/15360360",
            "https://i.gkd.li/i/17869227"
          ]
        }
      ]
    },
    {
      "name": "未分类-推荐流广告",
      "desc": "点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.hupu.games:id/shield_view\"] >2 [id=\"com.hupu.games:id/tv_tag\"][text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12511005",
            "https://i.gkd.li/i/13258026",
            "https://i.gkd.li/i/13259692"
          ]
        },
        {
          "matches": "@[clickable=true] > [id=\"com.hupu.games:id/tv_title\"][text=\"屏蔽该广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12511010",
            "https://i.gkd.li/i/12534848",
            "https://i.gkd.li/i/13259699"
          ]
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击x掉",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27383159",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-推荐流广告",
      "desc": "点击卡片右上角广告文字或省略号,出现广告反馈,点击屏蔽该广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "anyMatches": [
            "@[id=\"com.hupu.games:id/shield_view\"] >2 [id=\"com.hupu.games:id/tv_tag\"][text=\"广告\"]",
            "@[id=\"com.hupu.games:id/shield_view\"] - FrameLayout > ViewGroup > [id=\"com.hupu.games:id/tvSign\"][text=\"广告\"]"
          ],
          "key": 0,
          "name": "【广告】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12511005",
            "https://i.gkd.li/import/13258026",
            "https://i.gkd.li/import/13259692",
            "https://i.gkd.li/i/13259692",
            "https://i.gkd.li/i/22327976"
          ]
        },
        {
          "matches": "@TextView[text=\"屏蔽该广告\"||text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "name": "【屏蔽该广告/不感兴趣】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12511010",
            "https://i.gkd.li/import/12534848",
            "https://i.gkd.li/import/13259699",
            "https://i.gkd.li/i/12534848",
            "https://i.gkd.li/i/18123775"
          ]
        }
      ]
    },
    {
      "name": "推荐流广告",
      "desc": "点击卡片右上角广告文字,出现广告反馈,点击屏蔽该广告",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.hupu.games:id/shield_view\"] >2 [id=\"com.hupu.games:id/tv_tag\"][text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12511005",
            "https://i.gkd.li/import/13258026",
            "https://i.gkd.li/import/13259692"
          ]
        },
        {
          "matches": "@[clickable=true] > [id=\"com.hupu.games:id/tv_title\"][text=\"屏蔽该广告\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12511010",
            "https://i.gkd.li/import/12534848",
            "https://i.gkd.li/import/13259699"
          ]
        }
      ]
    }
  ]
});

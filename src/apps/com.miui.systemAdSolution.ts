// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智能服务",
  "id": "com.miui.systemAdSolution",
  "groups": [
    {
      "name": "分段广告-为什么不希望看到这条推广",
      "desc": "点击\"不感兴趣\"",
      "key": 0,
      "rules": [
        {
          "anyMatches": [
            "[text=\"不感兴趣\"][clickable=true]",
            "@[clickable=true] > [text=\"不感兴趣\"][clickable=false][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13227328",
            "https://i.gkd.li/i/13255751",
            "https://i.gkd.li/i/14946925",
            "https://i.gkd.li/i/23619341"
          ]
        },
        {
          "anyMatches": [
            "[text=\"广告密集\"][clickable=true]",
            "@[clickable=true] > [text=\"广告密集\"][clickable=false][visibleToUser=true]"
          ],
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/19636920",
            "https://i.gkd.li/i/23619357"
          ]
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14927422",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-miui-为什么不希望看到这条推广",
      "desc": "点击【不感兴趣】",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.miui.systemAdSolution:id/no_interest\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-miui-为什么不希望看到这条推广",
      "desc": "点击推广内容反馈页面的【不感兴趣】选项",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.miui.systemAdSolution:id/no_interest\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-miui-为什么不希望看到这条推广",
      "desc": "点击【不感兴趣】",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.miui.systemAdSolution:id/no_interest\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "miui-为什么不希望看到这条推广",
      "desc": "点击【不感兴趣】",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.miui.systemAdSolution:id/no_interest\"]",
          "key": 0
        }
      ]
    }
  ]
});

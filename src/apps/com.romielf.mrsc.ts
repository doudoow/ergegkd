// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "每日赛车",
  "id": "com.romielf.mrsc",
  "groups": [
    {
      "name": "分段广告-新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "key": 0,
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12667539"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12667549"
        }
      ]
    },
    {
      "name": "未分类-新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667539",
          "key": 0
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12667549",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/12667539",
          "key": 0
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/12667549",
          "key": 1
        }
      ]
    },
    {
      "name": "新闻页面摇一摇广告",
      "desc": "点击准确率灵敏度不太高",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image < View -n View >2 View[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/import/12667539",
          "key": 0
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/12667549",
          "key": 1
        }
      ]
    }
  ]
});

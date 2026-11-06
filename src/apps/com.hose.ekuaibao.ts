// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "易快报",
  "id": "com.hose.ekuaibao",
  "groups": [
    {
      "name": "局部广告-首页横幅广告",
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-横幅广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=2] > TextView + TextView[text=\"不感兴趣\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-横幅广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View[childCount=2] > TextView + TextView[text=\"不感兴趣\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-横幅广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=2] > TextView + TextView[text=\"不感兴趣\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});

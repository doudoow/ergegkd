// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "LIBVIO",
  "id": "lab.vie.two",
  "groups": [
    {
      "name": "其他-账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，自动点击\"我知道了\"",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13379070",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，本规则自动点击【我知道了】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，本规则自动点击【我知道了】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，本规则自动点击【我知道了】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});

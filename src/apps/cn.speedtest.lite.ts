// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网速管家极速版",
  "id": "cn.speedtest.lite",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - [id=\"cn.speedtest.lite:id/ll_main_pane\"] >2 [id=\"cn.speedtest.lite:id/tv_upgrade_content\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715483",
          "key": 0
        },
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - [id=\"cn.speedtest.lite:id/ll_main_pane\"] >2 [id=\"cn.speedtest.lite:id/tv_upgrade_content\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"iv_close\"] - [vid=\"ll_main_pane\"] >2 [vid=\"tv_upgrade_content\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715483",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-新人专享优惠弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - RelativeLayout >n [id=\"cn.speedtest.lite:id/ad_banner\"]",
          "activityIds": "cn.speedtest.lite.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715511",
          "key": 0
        },
        {
          "matches": "@[vid=\"iv_close\"] - RelativeLayout >n [vid=\"ad_banner\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12715511",
          "key": 1
        },
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - RelativeLayout >n [id=\"cn.speedtest.lite:id/ad_banner\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-新人专享优惠弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - RelativeLayout >n [id=\"cn.speedtest.lite:id/ad_banner\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - [id=\"cn.speedtest.lite:id/ll_main_pane\"] >2 [id=\"cn.speedtest.lite:id/tv_upgrade_content\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "新人专享优惠弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"cn.speedtest.lite:id/iv_close\"] - RelativeLayout >n [id=\"cn.speedtest.lite:id/ad_banner\"]",
          "key": 0
        }
      ]
    }
  ]
});

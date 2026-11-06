// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网速管家",
  "id": "cn.lezhi.speedtest",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.lezhi.speedtest:id/rl_update_dialog_layout\"] >n [id=\"cn.lezhi.speedtest:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "order": -1,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.byted.pangle:id/tt_splash_skip_btn\"] <<n [id=\"cn.lezhi.speedtest:id/fl_splash_container\"]",
          "name": "字节SDK",
          "snapshotUrls": "https://i.gkd.li/import/13544242",
          "key": 0
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13626049",
          "key": 1
        },
        {
          "matches": "@View <3 FrameLayout[childCount=4] <2 FrameLayout[childCount=2] < [vid=\"fl_splash_container\"]",
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13885906",
          "key": 2
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"cn.lezhi.speedtest:id/rl_update_dialog_layout\"] >n [id=\"cn.lezhi.speedtest:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});

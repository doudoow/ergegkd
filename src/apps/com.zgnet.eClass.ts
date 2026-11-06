// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌医课堂",
  "id": "com.zgnet.eClass",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[id$=\"tv_close_time\"&&text^=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12644260",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-退出确认弹窗",
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"确定要退出\"] < LinearLayout +n LinearLayout > TextView[id$=\"tv_exit_sure\"]",
          "snapshotUrls": "https://i.gkd.li/i/12645513",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-退出确认弹窗（默认关闭）",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"确定要退出\"] < LinearLayout +n LinearLayout > TextView[id$=\"tv_exit_sure\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12645513"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-退出确认弹窗（默认关闭）",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"确定要退出\"] < LinearLayout +n LinearLayout > TextView[id$=\"tv_exit_sure\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12645513"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "退出确认弹窗（默认关闭）",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"确定要退出\"] < LinearLayout +n LinearLayout > TextView[id$=\"tv_exit_sure\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12645513"
          ],
          "key": 0
        }
      ]
    }
  ]
});

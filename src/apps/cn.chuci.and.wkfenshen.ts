// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "猴子分身",
  "id": "cn.chuci.and.wkfenshen",
  "groups": [
    {
      "name": "全屏广告-购买会员弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[id=\"cn.chuci.and.wkfenshen:id/dialog_local_buy_btn\"]",
            "[id=\"cn.chuci.and.wkfenshen:id/action_close\"]"
          ],
          "activityIds": "cn.chuci.and.wkfenshen.ActMain",
          "snapshotUrls": "https://i.gkd.li/i/13226988",
          "key": 0
        },
        {
          "matches": [
            "[vid=\"dialog_local_buy_btn\"]",
            "[vid=\"action_close\"]"
          ],
          "activityIds": ".ActMain",
          "snapshotUrls": "https://i.gkd.li/i/13226988",
          "key": 1
        },
        {
          "matches": [
            "@ImageView[id=\"cn.chuci.and.wkfenshen:id/action_close\"] + ViewGroup[id=\"cn.chuci.and.wkfenshen:id/local_cl_content\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13226988",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-购买会员弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[id=\"cn.chuci.and.wkfenshen:id/dialog_local_buy_btn\"]",
            "[id=\"cn.chuci.and.wkfenshen:id/action_close\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13226988",
          "key": 0
        }
      ]
    },
    {
      "name": "购买会员弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[id=\"cn.chuci.and.wkfenshen:id/dialog_local_buy_btn\"]",
            "[id=\"cn.chuci.and.wkfenshen:id/action_close\"]"
          ],
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13226988",
          "key": 0
        }
      ]
    }
  ]
});

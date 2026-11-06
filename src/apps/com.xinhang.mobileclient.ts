// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国移动河南",
  "id": "com.xinhang.mobileclient",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "View[desc^=\"close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13024867"
        },
        {
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13024869"
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.xinhang.mobileclient:id/iv_close\"] + [id=\"com.xinhang.mobileclient:id/iv_advert\"]",
          "activityIds": "com.xinhang.mobileclient.home.activity.HomeActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024863",
            "https://i.gkd.li/i/13024872"
          ],
          "key": 0
        },
        {
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_advert\"]",
          "activityIds": ".home.activity.HomeActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024863",
            "https://i.gkd.li/i/13024872"
          ],
          "key": 1
        },
        {
          "matches": "@[id=\"com.xinhang.mobileclient:id/iv_close\"] + [id=\"com.xinhang.mobileclient:id/iv_advert\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View[desc^=\"close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13024867"
        },
        {
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13024869"
        }
      ]
    },
    {
      "name": "未分类-右侧悬浮广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.xinhang.mobileclient:id/iv_close\"] + [id=\"com.xinhang.mobileclient:id/iv_advert\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-应用内广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "View[desc^=\"close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13024867"
        },
        {
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13024869"
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "View[desc^=\"close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13024867"
        },
        {
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13024869"
        }
      ]
    },
    {
      "name": "右侧悬浮广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.xinhang.mobileclient:id/iv_close\"] + [id=\"com.xinhang.mobileclient:id/iv_advert\"]",
          "key": 0
        }
      ]
    }
  ]
});

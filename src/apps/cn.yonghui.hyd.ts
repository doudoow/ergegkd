// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "永辉生活",
  "id": "cn.yonghui.hyd",
  "groups": [
    {
      "name": "全屏广告-红包弹窗",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[id=\"cn.yonghui.hyd:id/advance\" || id=\"cn.yonghui.hyd:id/couponsWillGoneHeaderIv\"]",
            "[id=\"cn.yonghui.hyd:id/close\"]"
          ],
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "key": 0,
          "name": "好券即将过期弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13414401",
            "https://i.gkd.li/i/13414444"
          ]
        },
        {
          "matches": [
            "[vid=\"advance\" || vid=\"couponsWillGoneHeaderIv\"]",
            "[vid=\"close\"]"
          ],
          "activityIds": ".coupon.couponfactory.CouponFactoryActivity",
          "key": 1,
          "name": "好券即将过期弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/13414401",
            "https://i.gkd.li/i/13414444"
          ]
        }
      ]
    },
    {
      "name": "未分类-红包弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cn.yonghui.hyd:id/advance\"] +n [id=\"cn.yonghui.hyd:id/close\"]",
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "key": 0,
          "name": "领券中心-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13414401"
        },
        {
          "matches": "[id=\"cn.yonghui.hyd:id/couponsWillGoneHeaderIv\"] +n [id=\"cn.yonghui.hyd:id/close\"]",
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "key": 1,
          "name": "好券即将过期弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13414444"
        }
      ]
    },
    {
      "name": "全屏广告-优惠卷弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "anyMatches": [
            "@TextView[id=\"cn.yonghui.hyd:id/close\"] -n [id=\"cn.yonghui.hyd:id/title\"][text=\"天降红包\"]",
            "@ImageView[id=\"cn.yonghui.hyd:id/close\"] -n [id=\"cn.yonghui.hyd:id/couponsWillGoneHeaderIv\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/13414401",
            "https://i.gkd.li/import/13414444"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "红包弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.yonghui.hyd:id/advance\"] +n [id=\"cn.yonghui.hyd:id/close\"]",
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "key": 0,
          "name": "领券中心-红包弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13414401"
        },
        {
          "matches": "[id=\"cn.yonghui.hyd:id/couponsWillGoneHeaderIv\"] +n [id=\"cn.yonghui.hyd:id/close\"]",
          "activityIds": "cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity",
          "key": 1,
          "name": "好券即将过期弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13414444"
        }
      ]
    }
  ]
});

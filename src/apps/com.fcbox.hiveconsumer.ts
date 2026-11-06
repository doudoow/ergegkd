// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "丰巢",
  "id": "com.fcbox.hiveconsumer",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"优惠券\"] + @[vid=\"img_close\"]",
          "activityIds": "kt.com.fcbox.hiveconsumer.app.business.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22455763",
          "key": 0
        },
        {
          "matches": "[vid=\"ivClose\"]",
          "activityIds": [
            "kt.com.fcbox.hiveconsumer.app.business.main.MainActivity",
            "kt.com.fcbox.hiveconsumer.app.business.membership.MemberCenterActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22724047",
            "https://i.gkd.li/i/22724105"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"会员已过期\"] + [vid=\"close_img\"][clickable=true]",
          "activityIds": "kt.com.fcbox.hiveconsumer.app.business.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24560868",
          "key": 0
        }
      ]
    }
  ]
});

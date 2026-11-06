// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Clock",
  "id": "com.android.BBKClock",
  "groups": [
    {
      "name": "功能类-自动关闭闹钟提示",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"snooze_clock_view\"] + [vid=\"close_button\"][clickable=true][visibleToUser=true]",
          "activityIds": ".alarmclock.view.activity.AlarmAlertFullScreen",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25462593",
          "key": 0
        }
      ]
    }
  ]
});

package com.awesomeproject;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by Administrator on 2016/7/12.
 */
public class YToastModule extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "short";
    private static final String DURATION_LONG_KEY = "long";

    public YToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "YToastAndroid";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration, Promise promise) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        WritableMap params = Arguments.createMap();
        params.putString("text","a2r");
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("texta2r",params);
        promise.resolve("android");
    }

}

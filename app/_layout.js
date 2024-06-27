import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { BottomSheetModalProvider, BottomSheetProvide } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const layout = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <BottomSheetModalProvider>
                <Stack>
                    <Stack.Screen
                        name='index'
                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen
                        name='home/index'
                        options={{
                            headerShown: false
                        }} />
                </Stack>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>

    )
}

export default layout
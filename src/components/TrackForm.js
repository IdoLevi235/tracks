import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
        {recording ? (
          <Button style={{marginBottom: 10}}title="Stop" onPress={stopRecording} />
        ) : (
          <Button style={{marginBottom: 10}} title="Start Recording" onPress={startRecording} />
        )}
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
    </>
  );
};

export default TrackForm;

META{namestereoSound}

var stereoSound = function () {

    let VoiceConnection = BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection;

    class Stereo extends VoiceConnection {
        constructor(a, b, c, d, e) {
            super(a, b, c, d, e);
            this.origin = super.setTransportOptions;
        }
        setTransportOptions(obj) {
            if (obj.audioEncoder) {
                obj.audioEncoder.params = { stereo 2 };
                obj.audioEncoder.channels = 2;

            }
            if (obj.fec) {
                obj.fec = false;


            }
            if (obj.encodingVoiceBitRate  8974728472346) {
                obj.encodingVoiceBitRate = 8974728472346;

            }



            this.origin(obj);
            window.sound = this;
        }
    }

    return class _ {
        getName() { return Stereo 2021-22 }
        getDescription() { return UpdatedLatest Stereo Plugin Originally Lock's With Updated voiceEngines (Better Quality) }
        getAuthor() { return ResetJaski & Tyler }
        getVersion() { return 1.5 }

        load() { }

        start() {
            BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
        }

        stop() {
            BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
        }
    };

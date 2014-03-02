// forked from minori's "vinclu_demo1" http://jsdo.it/minori/vinclu_demo1
// forked from t_furu's "Lチカ テスト用" http://jsdo.it/t_furu/eWBo
//LEDをチカチカさせる 正弦波 発生
LED = function(frequencyL,frequencyR){
    this.isOn = false;    
    this.audio_context = null;
    this.audio_node = null;
    
    this.frequencyL = frequencyL;
    this.frequencyR = frequencyR;
    
    this.init = function(){
        this.audio_context = new webkitAudioContext();
    };
    
    //再生バッファ作成
    this.createAudioDataBuffer = function(context,frequencyL,frequencyR){
        context.samplingRate = 44100;
        var s = context.samplingRate * 2;
        var buffer = context.createBuffer(2, s, context.samplingRate);
        var audioDataL = buffer.getChannelData(0);
        var audioDataR = buffer.getChannelData(1);
        for(var i = 0; i < audioDataL.length; i++){
            var l = Math.sin(2 * Math.PI * frequencyL * i / context.samplingRate);
            var r = Math.sin(2 * Math.PI * frequencyR * i / context.samplingRate);
            audioDataL[i] = l;
            audioDataR[i] = r*-1;
        }
        return buffer;
    };
    
    //LEDをオン
    this.on = function(){
        if(this.isOn == false){
            this.isOn = true;
            
            //バッファーを設定
            this.audio_node = this.audio_context.createBufferSource();
            this.audio_node.buffer = this.createAudioDataBuffer(this.audio_context,this.frequencyL,this.frequencyR);
            this.audio_node.loop = true;
            this.audio_node.connect(this.audio_context.destination);
	console.log("light now");
        }
        this.audio_node.noteOn(0);
    };
    
    //LEDをオフ
    this.off = function(){
        if(this.isOn){
            this.isOn = false;
            this.audio_node.noteOff(0);
        }
    };
    
    this.init();
}

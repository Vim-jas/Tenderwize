pragma solidity ^0.4.17;

contract Tenderwize {
	bytes [100] public GSTIDArr;
	bytes [100] public hashArr;
	uint cnt;


	function Tenderwize () public {
		cnt = 0;
	}

	function mapClient(bytes GSTID, bytes hash) public returns (bool) {
		require (check(GSTID));
		GSTIDArr[cnt] = GSTID;
		hashArr[cnt] = hash;
		cnt += 1;
	}

	function check (bytes GSTID) private view returns (bool) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(GSTIDArr[i]) == keccak256(GSTID)) {
				return false;
			}
		}
		return true;
	}

	function matchFileHash (bytes GSTID, bytes hash, bytes givenHash) view returns (bool) {
		for (uint i = 0; i < cnt; i++) {
			if (keccak256(GSTIDArr[i]) == keccak256(GSTID) && keccak256(hashArr[i]) == keccak256(hash) && keccak256(hash) == keccak256(givenHash)) {
				return true;
			}
		}
		return false;
	}
}
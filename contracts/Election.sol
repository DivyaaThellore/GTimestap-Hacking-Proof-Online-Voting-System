pragma solidity 0.4.24;

contract Election {
	  // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
  
	event votedEvent (
        uint indexed _candidateId
    );
    
	// Read/write candidates
    mapping(uint => Candidate) public candidates;

    // Store Candidates Count
    uint public candidatesCount;

	 // Store accounts that have voted
    mapping(address => bool) public voters;

    constructor () public {
        addCandidate("Hillarious Clint");
        addCandidate("Donald Duck");
    }

	function vote (uint _candidateId) public {
		// require that they haven't voted before
		require(!voters[msg.sender]);

		// require a valid candidate
		require(_candidateId > 0 && _candidateId <= candidatesCount);

		// record that voter has voted
		voters[msg.sender] = true;

		// update candidate vote Count
		candidates[_candidateId].voteCount ++;

		// trigger voted event
		emit votedEvent(_candidateId);
	}

    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}
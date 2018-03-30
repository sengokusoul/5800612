using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Net;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

public class GamManager : MonoBehaviour {
	public string Url = "http://localhost:8081/users";

	// Use this for initialization
	void Start () {
		try
		{
			HttpWebRequest request = (HttpWebRequest)WebRequest.Create(Url);
			HttpWebResponse response = (HttpWebResponse)request.GetResponse();
			Stream stream = response.GetResponseStream();
			string responseBody = new StreamReader(stream).ReadToEnd();

			print(responseBody);

			Player[] players = JsonConvert.DeserializeObject<Player[]>(responseBody);
			print(players[0].Name);
		}
		catch(WebException ex)
		{
		}

	}
	
	// Update is called once per frame
	void Update () {
		
	}
}

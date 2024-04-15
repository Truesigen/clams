<?php

namespace App\Services;

use GuzzleHttp\Client;

class JsonRpcClient
{
    const RPC_VERSION = '2.0';

    public string $method;

    private $client;

    public function __construct()
    {
        $this->client = new Client(['base_uri' => 'https://api.mainnet-beta.solana.com', 'headers' => ['Content-Type' => 'application/json']]);
    }

    public function send()
    {
        $params = [
            '5aWSgqmw52zE9gfrLGoeAyLxyKfTkjgfFrbS6nrqFyd',

        ];

        $response = $this->client->post('', ['json' => ['jsonrpc' => '2.0', 'id' => time(), 'method' => 'getBalance', 'params' => $params]]);

        return $response->getBody()->getContents();
    }
}

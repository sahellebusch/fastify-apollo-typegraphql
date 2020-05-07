interface StatusResponse {
  status: string;
}

export const getStatus = async (): Promise<StatusResponse> => ({ status: 'ok' });
